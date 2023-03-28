import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  toPdf() {
    const cv = document.getElementById('cv');

    const cvHeight = cv?.clientHeight;
    const cvWidth = cv?.clientWidth;
    const options = { background: 'white', width: cvWidth, height: cvHeight };

    domtoimage.toPng(cv!, options).then((imgData) => {
         const doc = new jsPDF();
         const imgProps = doc.getImageProperties(imgData);
         const pdfWidth = doc.internal.pageSize.getWidth();
         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
         doc.save('alessandro-alfano-website.pdf');
    });
}
}
