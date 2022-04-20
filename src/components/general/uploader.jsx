import { Dashboard, useUppy } from '@uppy/react';
import Uppy from '@uppy/core';

export default function Uploader({ handleUpload, height, maxNumberOfFiles, maxFileSize }) {
  const uppy = useUppy(
    () =>
      new Uppy({
        id: 'uppy-message-upload',
        autoProceed: false,
        allowMultipleUploadBatches: true,
        debug: true,
        restrictions: {
          maxFileSize: maxFileSize || 10000000,
          maxNumberOfFiles: maxNumberOfFiles || 1,
          allowedFileTypes: ['.jpg', '.jpeg', '.png', '.webp'],
        },
      }),
  );

  uppy.on('complete', (result) => {
    if (result.successful.length) {
      const gallery = result.successful.map((file) => file.meta.key);
      console.log(gallery);
      handleUpload(gallery);
    }
  });

  uppy.on('error', (error) => {
    console.log('Uppy error:', error);
  });

  return <Dashboard uppy={uppy} height={height || 300} />;
}
