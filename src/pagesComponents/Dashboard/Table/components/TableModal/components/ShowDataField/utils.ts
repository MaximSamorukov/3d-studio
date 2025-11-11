export const handleDownload = async (fileKey: string) => {
  if (fileKey) {
    try {
      const response = await fetch(fileKey);
      if (!response.ok) throw new Error('Ошибка при загрузке файла');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;

      const fileName = fileKey.split('/').pop() || 'file.stl';
      link.download = fileName;

      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Ошибка при скачивании:', error);
    }
  }
};
