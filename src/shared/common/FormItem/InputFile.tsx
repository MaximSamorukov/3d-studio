import React, { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { useController, useFormContext } from 'react-hook-form';
import { FormItemType } from './types';
import s from './style.module.scss';

export const InputFile = ({
  field: { name, rules },
}: {
  field: FormItemType;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [active, setActive] = useState(false);
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
  });
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setActive(true);
  }, []);
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setActive(false);
      const file = e.dataTransfer.files[0];
      if (!file) return;
      const { name, type, size } = file;
      const sizeInMb = size / 1024 ** 2;

      const isValidSize = sizeInMb < 10;
      const isValidExtension = name.endsWith('.obj') || name.endsWith('.stl');
      const isValidMimeType =
        type === 'application/x-tgif' || type === 'model/stl';

      if (isValidSize && isValidExtension && isValidMimeType) {
        onChange(file);
      } else {
        alert('Файла не соответствует требованиям');
      }
    },
    [onChange],
  );
  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const { name, type, size } = file;
    const sizeInMb = size / 1024 ** 2;

    const isValidSize = sizeInMb < 10;
    const isValidExtension = name.endsWith('.obj') || name.endsWith('.stl');
    const isValidMimeType =
      type === 'application/x-tgif' || type === 'model/stl';

    if (isValidSize && isValidExtension && isValidMimeType) {
      onChange(file);
    } else {
      alert('Файла не соответствует требованиям');
    }
  };
  return (
    <div className={s.fileFieldContainer}>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={cn(s.fileFieldItem, { [s.fileFieldItemActive]: active })}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {value?.name ? (
          <div className={s.fileNameContainer}>
            <div className={s.fileNameLabel}>
              <span>{value.name}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
                if (inputRef.current) inputRef.current.value = '';
              }}
              className={s.fileNameRemove}
            >
              <Image
                title="удалить файл"
                src="/remove.svg"
                alt="remove"
                width={24}
                height={24}
              />
            </button>
          </div>
        ) : (
          <span>
            Ператащите сюда файл (не более 10 Мб) для загрузки.
            <br />
            Форматы: *.STL, *.OBJ
          </span>
        )}
      </div>
    </div>
  );
};
