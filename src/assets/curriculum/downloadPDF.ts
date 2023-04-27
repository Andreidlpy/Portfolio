import { saveAs } from 'file-saver';

import CV from '@/assets/curriculum/CV.pdf';

export const downloadPdf = async (): Promise<void> => {
  try {
    const response = await fetch(CV);
    const blob = await response.blob();
    saveAs(blob, 'mi-cv.pdf');
  } catch (error) {
    console.error(error);
  }
};
