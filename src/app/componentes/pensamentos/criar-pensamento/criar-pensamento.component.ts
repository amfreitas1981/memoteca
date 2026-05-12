import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  mensagem: string = '';

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe({
      next: () => {
        this.mensagem = 'Pensamento criado com sucesso!';
        setTimeout(() => {
          this.router.navigate(['/listarPensamento']);
        }, 1500);
      },
      error: (erro) => {
        console.error('Erro ao criar pensamento:', erro);
        this.mensagem = 'Erro ao salvar pensamento. Verifique se o servidor está rodando em http://localhost:3000';
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
