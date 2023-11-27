import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public data: any;

  constructor(private element: ElementRef, private readonly dataService: DataService) {}

  async ngOnInit() {
    this.data = await this.dataService.getRemoteData();
  }

  public async printPage() {
    const component = document.getElementById("cv")?.innerHTML;
    const css = this.getCSS();
    const html = `
      <html lang="en-US">
        <header>
            <style>${css}</style>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/bold/style.css"
            />
        </header>
        <body>
            ${component}
        </body>
      </html>
    `

    const winPrint = window.open("", "_blank", "left=0,top=0,width=800,height=800,toolbar=0,scrollbars=0,status=0");
      if (winPrint) {
        winPrint.document.write(html);
        winPrint.document.close();
        winPrint.focus();
        winPrint.print();
        winPrint.close();
      }
  }

  private getCSS(): string {
    const styles = document.styleSheets;
    let css = '';

    for (let i = 0; i < styles.length; i++) {
      try {
        const rules = styles[i].cssRules || styles[i].rules;

        for (let j = 0; j < rules.length; j++) {
          css += rules[j].cssText + '\n';
        }
      } catch (error) {
        console.error('Errore nel recupero delle regole CSS:', error);
      }
    }

    return css;
  }
}
