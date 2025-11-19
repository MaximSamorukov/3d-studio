import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { useController, useFormContext } from 'react-hook-form';
import s from './style.module.scss';
import { ModelPreviewComponent } from '../ModelPreviewComponent';
import { formCalculationState } from '../formCalculationStore';
import { observer } from 'mobx-react-lite';
import { FormItemType } from '@/shared/common/FormItem/types';

export const Input3DFile = observer(
  ({ field: { name } }: { field: FormItemType }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [active, setActive] = useState(false);
    const { control, setError } = useFormContext();
    const {
      field: { value, onChange },
      fieldState: { error },
    } = useController({
      name,
      control,
      rules: {
        required: 'Необходимо прикрепить файл',
      },
    });

    useEffect(() => () => formCalculationState.revokeModelUlr(), []);

    const openPreviewWindow = () => {
      if (!formCalculationState.previewModalIsOpen) {
        formCalculationState.openPreviewModal();
      }
    };
    const validateAndProcessFile = (file: File) => {
      const { name, type, size } = file;
      const normFileName = name.toLowerCase();
      const sizeInMb = size / 1024 ** 2;

      const isValidSize = sizeInMb < 10;
      const isValidExtension =
        normFileName.endsWith('.3mf') ||
        normFileName.endsWith('.stl') ||
        normFileName.endsWith('.amf');
      const isValidMimeType =
        type === 'application/x-tgif' ||
        type === 'model/stl' ||
        type === 'application/vnd.ms-3mfdocument' ||
        type === 'model/3mf' ||
        type === 'model/amf' ||
        type === 'application/x-amf' ||
        type === '';

      if (isValidSize && isValidExtension && isValidMimeType) {
        onChange(file);

        formCalculationState.setModelUrl(URL.createObjectURL(file));
        formCalculationState.setFileName(file.name);
      } else {
        setError(name, { message: 'Файл не соответствует требованиям' });
        alert('Файл не соответствует требованиям');
      }
    };
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
        validateAndProcessFile(file);
      },
      [onChange],
    );
    const handleClick = () => {
      inputRef.current?.click();
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      validateAndProcessFile(file);
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openPreviewWindow();
                }}
                className={s.fileNameRemove}
              >
                <Image
                  title="просмотр файла"
                  src="/preview.svg"
                  alt="preview"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          ) : (
            <span>
              Ператащите сюда файл (не более 10 Мб) для загрузки.
              <br />
              Форматы: *.STL, *.3MF, *AMF
              <br />
              {error?.message ? (
                <span className={s.fileFieldRed}>{error.message}</span>
              ) : (
                <></>
              )}
            </span>
          )}
        </div>
        <ModelPreviewComponent />
      </div>
    );
  },
);
