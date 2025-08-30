import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { PageForm } from './forms/page-form';
import { LoadingComponent } from './loading/loading.component';


/**
 * @description Classe responsável por oferecer métodos e atributos comuns entre os componentes
 *
 * @author Arur Cavacante
 * @since 23/05/2019 10:39
 * @export
 * @class View
 */
export class View {

    versao = '1.0.0';
    pagina = 1;
    titulo = '';
    lblBtnSalvar = 'Cadastrar';
    lblBtnGravar = 'Gravar';
    lblBtnBuscar = 'Buscar';
    lblBtnLimpar = 'Limpar';
    lblBtnNovo = 'Novo *';
    lblBtnExcluir = 'Excluir';
    lblPageAnt = 'Anterior';
    lblPageProx = 'Próximo';
    submitted = false;
    error = false;
    pager: PageForm;
    cidadeSub: Subscription;
    estadoSub: Subscription;
    filialSub: Subscription;
    MOEDA = 'BRL';
    DATA_HORA = 'dd/MM/yyyy HH:mm';
    DATA = 'dd/MM/yyyy';
    isAdmin: boolean;

    constructor(public tela: string, public loading: MatDialog) {

    }

    exibirLoading() {
        this.loading.open(LoadingComponent, {
            width: '150px'
          });
    }

    fecharLoading() {

        this.loading.closeAll();
    }

    exibirErro() {

        this.submitted = false;
        this.error = true;
    }

    exibirSucesso() {

        this.submitted = true;
        this.error = false;
    }


    modificarLabelsEditar() {
        this.titulo = 'Dados de ' + this.tela;
        this.lblBtnSalvar = 'Gravar';
      }

    limpar() {
        this.submitted = false;
        this.error = false;
    }   

    /**
     * @description Selecionar tipo de Unidade do Produto
     * @param {TipoUnidade} tipo
     * @returns {*}
     * @memberof View
     */
    getTipoUnidadeSpec(tipo): any {

        if (tipo == null) {
            return {key: -1, value: ''};
        }

        switch (tipo) {
            case 0:
                return { key: 0, value: 'PC'};
            case 1:
                return { key: 1, value: 'Unidade'};
        }
    }

    /**
     * @description Listar tipos de unidades dos Produtos
     * @returns {*}
     * @memberof View
     */
    getTipoUnidadeSpecAll(): any {

        const tipoUnidadeList = [
            {key: 0, value: 'PC'},
            {key: 1, value: 'Unidade'}
         ];

         return tipoUnidadeList;
    }


    /*checkPermissionAction(permissao): boolean{        

        if (this.storage.getLocalUser().permissoes.indexOf(permissao) > -1) {
            return true;
        }

        return false;
    } */

}
