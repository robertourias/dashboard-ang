import { Component, OnInit } from '@angular/core';

import { DadosService } from './dados.service';

declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    );
  }

  init(): void {
    if (typeof(google) !== 'undefined') {
      // Load the Visualization API and the corechart package.
      google.charts.load('current', { packages: ['corechart'] });

      setTimeout(() => {
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  /**
   * Método chamado assim que a API do google é inicializada
   * Responsável por chamar os métodos geradores do graficos
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPieChart();
    // this.exibir3dPieChart();
    // this.exibirBarChart();
    // this.exibirLineChart();
    // this.exibirColumnChart();
    // this.exibirDonutChart();
  }

  /**
   * Exibe o gráfico PieChart
   * @return void
   */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico 3DPieChart
   * @return void
   */
  exibir3DPieChart(): void {

  }

  /**
   * Exibe o gráfico BarChart
   * @return void
   */
  exibirBarChart(): void {

  }

  /**
   * Exibe o gráfico LineChart
   * @return void
   */
  exibirLineChart(): void {

  }

  /**
   * Exibe o gráfico ColumnChart
   * @return void
   */
  exibirColumnChart(): void {

  }

  /**
   * Exibe o gráfico DonutChart
   * @return void
   */
  exibirDonutChart(): void {

  }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos,
   * responsável por definir os dados do gráfico.
   *
   * @return any
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título
   * e tamanho do gráfico.
   *
   * @return any
   */
  obterOpcoes(): any {
    return {
      title: 'Quantidade de cadastros primeiro semestre',
      width: 400,
      height: 300
    };
  }

}
