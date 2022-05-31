import { Injectable } from '@angular/core';
import { LocalStorageService } from '@services/local-storage.service';
import { MessageService } from '@services/message.service';
import { Subject } from 'rxjs';



// import { LocalStorageService } from './LocalStorage.service';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
private loaderStatus = new Subject<boolean>();
  constructor(private _localStorageService: LocalStorageService, private messageService: MessageService) { }
    /**
     *
     * @param message mensaje: una cadena de texto
     * @param buttontex button: titulo del mensaje
     * @param messageType  cadena de texto con las opciones error, success, warn
     */
  public createAlert(        message: string,
    buttontex: string,
    messageType: "error" | "success" | "warn")
    {
    this.messageService.showCustom(message,buttontex,messageType);
  }
  loading$ = this.loaderStatus.asObservable();

  loading(value: boolean = true) {
    this.loaderStatus.next(value);
  }
  public capitalize(s: string) {
    return s
      .toLowerCase()
      .replace(/\b./g, function (a: string) {
        return a.toUpperCase();
      });
  };

  public arrayRemove(arr: any[], value: any) {

    return arr.filter(function (ele:any) {
      return ele != value;
    });

  }

  public removeExtension(filename: string) {
    return filename.substr(0, filename.lastIndexOf('.') + 1);
  }

  public convertArrayToChunks(array:any, size:any): any[] {
    const arrChunked = [];
    let index = 0;
    while (index < array.length) {
      arrChunked.push(array.slice(index, size + index));
      index += size;
    }
    return arrChunked;
  }

  public compare(a: { [x: string]: number; }, b: { [x: string]: number; }, prop: string | number) {
    if (a[prop] < b[prop])
      return -1;
    if (a[prop] > b[prop])
      return 1;
    return 0;
  }

  orderByObject(arr: any[], key: string, order: "desc" | "asc" = "asc") {
    let data = arr
    if (order == "asc") {
      return data.sort((a, b) => (parseInt(a[key]) > parseInt(b[key])) ? 1 : ((parseInt(b[key]) > parseInt(a[key])) ? -1 : 0));
    }
    else {
      return data.sort((a, b) => (parseInt(a[key]) < parseInt(b[key])) ? 1 : ((parseInt(b[key]) < parseInt(a[key])) ? -1 : 0));
    }
  }

  public reverseString(str: string): string {
    return (str === '') ? '' : this.reverseString(str.substr(1)) + str.charAt(0);
  }

  public stringNextAscii(str: string): string {
    let nextCodeAscii = str.substring(str.length - 1).charCodeAt(0) + 1
    let charValue = String.fromCharCode(nextCodeAscii)
    return str.substring(0, str.length - 1) + charValue
  }

  removeDuplicates(arr: Array<any>): Array<any> {
    var temp = [];
    for (var i = 0; i < arr.length; i++)
      temp[arr[i]] = true;
    var r = [];
    for (var k in temp)
      r.push(k);
    return r;
  }

  // removeDuplicatesObject(arr: object[], prop: string): object[] {
  //   var obj = [];
  //   for (var i = 0, len = arr.length; i < len; i++) {
  //     if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
  //   }
  //   var newArr = [];
  //   for (var key in obj) newArr.push(obj[key]);
  //   return newArr;
  // }

  generatePassword(): string {
    return Math.random().toString(36).slice(-8);
  }

  public resolveObject(object: Object, pathArr: Array<any>) {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined')
      ? obj[key]
      : undefined, object);
  }
  public guid() {
    let _p8 = function (s: boolean | undefined) {
      var p = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s
        ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4)
        : p;
    }
    return _p8(undefined) + _p8(true) + _p8(true) + _p8(undefined);
  }

  expand(id: number, master: Array<any>, fieldSearch:any) {

    let value = master.length > 0
      ? master.filter(x => x[fieldSearch] == id)
      : []
    return value.length > 0
      ? value[0]
      : []
  }

  // expandMultipleFields(obj: object, fields: Array<any>): any {
  //   fields.length > 0
  //     ? fields.map(field => {
  //       obj[field[0]] = this.expand(obj[field[0]], field[1], field[2])
  //     })
  //     : []
  //   return obj
  // }



  /*----------------------------- Autocomplete Functions -----------------------------------------*/



  addInf(rowkey:any, name:any, partitionname:any, dataAutoCompleteInput:any) {
    this.addData(rowkey, name, partitionname, dataAutoCompleteInput);
  }

  addData(rowkey:any, name:any, partitionname:any, dataAutoCompleteInput:any) {
    let auxObject = {};
    auxObject = {
      RowKey: rowkey,
      Name: name,
      PartitionName: partitionname
    };

    dataAutoCompleteInput.push(auxObject);
  }

  /* ------------------------------------------------------------------------ */

  /**
    * Función principal que va generar la rama principal del árbol o el primer nivel
  */
  // getDataTree(dataMaster:any, NameIdMaster:any, NameIdParent:any) {
  //   let dataTree: any[] = [];
  //   let dataTreeAux: any[] = [];
  //   let treeComplement: any[] = [];
  //   let data = dataMaster; //Se guarda la copia de la información de la cual se va generar el arbol

  //   //Ciclo encargado de ir generando cada uno de los nodos del arbol
  //   for (let i = 0; i < data.length; i++) {
  //     let objAux = {
  //       label: data[i].Name,
  //       data: data[i],
  //       expandedIcon: "fa fa-folder-open",
  //       collapsedIcon: "fa fa-folder",
  //       draggable: true,
  //       droppable: true
  //     };
  //     // Validamos si el nodo actual es de primer nivel para ir generando la base del
  //     // arbol
  //     if (data[i].Level == 1) {
  //       //Se llama la funcion encargada de agregar el hijo al nodo actual
  //       this.getChildren(data[i][NameIdMaster], objAux, dataTree, data, NameIdParent);
  //     } else {
  //       // Caso en el cual la primera base del arbol está generada, esta funcion se
  //       // encarga de buscar el nodo padre del nodo actual
  //       this.getParent(data[i][NameIdParent], objAux, NameIdMaster, data, treeComplement);
  //     }
  //     // Al final del ciclo el árbol principal está generado, por lo que resta unir el
  //     // resto de arboles
  //     if (i == data.length - 1) {
  //       this.complementTrees(treeComplement, NameIdMaster);
  //       this.completeTree(dataTree, dataTreeAux, treeComplement, NameIdMaster);
  //     }
  //   }

  //   return dataTree;
  // }

  completeTree(dataTree:any, dataTreeAux:any, treeComplement:any, IdMaster:any) {
    dataTreeAux = dataTree; //Variable que guarda una copia del arbol principal
    for (let i = 0; i < treeComplement.length; i++) {
      // Variable que guarda el id de la unidad organizacional del padre del nodo
      // actual i del arbol complemento
      let id = treeComplement[i].parent.data[IdMaster];
      for (let j = 0; j < dataTree.length; j++) {
        //Si el @id es el nodo actual j quiere decir que el nodo i es hijo del nodo j
        if (id == dataTree[j].data[IdMaster]) {
          let obj = treeComplement[i]; //Nodo actual i del arbol complemento
          //Se verifica que tenga mas hijos de lo contrario se crea la propiedad y se agrega
          if (dataTree[j].children.length > 0) {
            for (let k = 0; k < dataTree[j].children.length; k++) {
              if (dataTree[j].children[k].data[IdMaster] == obj.data[IdMaster]) {
                dataTree[j]
                  .children
                  .push(obj);
                dataTree[j]
                  .children
                  .splice(k, 1);
              }
            }
          } else {
            dataTree[j].children = [];
            dataTree[j]
              .children
              .push(obj);
          }
          treeComplement.splice(i, 1);
        }
      }
    }
  }

  /**
     * Funcion encargada de organizar los hijos del arbol complemento
     */
  complementTrees(treeComplement:any, IdMaster:any) {
    for (let i = 0; i < treeComplement.length; i++) {
      // Variable que guarda el id de la unidad organizacional del padre del nodo
      // actual i
      let id = treeComplement[i].parent.data[IdMaster];
      for (let j = 0; j < treeComplement.length; j++) {
        //Si el @id es el nodo actual j quiere decir que el nodo i es hijo del nodo j
        if (id == treeComplement[j].data[IdMaster]) {
          let obj = treeComplement[i];
          treeComplement[j].children = [];
          treeComplement[j]
            .children
            .push(obj);
          treeComplement.splice(i, 1);
        }
      }
    }
  }

  /**
     * Funcion encargada de agregar el nodo actual al arbol
     * @param idDataMaster id del nodo actual
     * @param objAux nodo actual en construccion
     * @param dataTree Arbol principal
     * @param data Copia de la informacion de la maestra
     * @param NameIdParent Nombre de la propiedad que hace referencia al Id del Padre
     */
  getChildren(idDataMaster:any, objAux:any, dataTree:any, data:any, NameIdParent:any) {
    this.addChildren(idDataMaster, objAux, data, NameIdParent);
    dataTree.push(objAux);
  }

  /**
     * Funcion encargada de buscar el conjunto de hijos del nodo actual para su posterior agregado
     * @param idDataMaster id del nodo actual
     * @param objAux nodo actual en construccion
     * @param data Copia de la informacion de la maestra
     * @param NameIdParent Nombre de la propiedad que hace referencia al Id del Padre
     */
  addChildren(idDataMaster: any, objAux: { children: Object[]; }, data: any[], NameIdParent: string | number) {
    let auxData: any; //Variable encargada de guardar todos los hijos del nodo actual @idDataMaster
    auxData = data.filter((item: { [x: string]: any; }) => item[NameIdParent] === idDataMaster);
    if (auxData.length > 0) {
      // Se guardan en la propiedad children propia de TreeNode los hijos del nodo
      // actual
      objAux.children = this.pushChild(auxData);
    }
  }

  /**
     * Funcion encargada de retornar la lista de nodos en el modelo TreeNode
     * @param auxData lista de nodos
     */
  pushChild(auxData: string | any[]) {
    let child: any;
    let childs: Array<Object> = [];
    for (let i = 0; i < auxData.length; i++) {
      child = {
        label: auxData[i].Name,
        data: auxData[i],
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        draggable: true,
        droppable: true

      }
      childs.push(child);
    }
    return childs;
  }

  /**
     * Funcion encargada de buscar el padre del nodo actual para su posterior agregado
     * @param idParent id del padre del nodo actual
     * @param objAux nodo actual
     * @param IdMaster Nombre de la propiedad que hace referencia al Id de la maestra
     * @param data copia de la informacion de la maestra
     * @param treeComplement Arbol complemento
     */
  // getParent(idParent: any, objAux: { label?: any; data?: any; expandedIcon?: string; collapsedIcon?: string; draggable?: boolean; droppable?: boolean; children?: any; }, IdMaster: string | number, data: any[], treeComplement: any[]) {
  //   let auxData: any; //Variable encargada de guardar el padre del nodo actual @idParent
  //   auxData = data.filter((item: { [x: string]: any; }) => item[IdMaster] === idParent);
  //   if (auxData.length > 0) {
  //     objAux.children = this.pushParent(auxData, objAux, treeComplement);
  //   }
  // }

  /**
     * Funcion encargada de agregar a un nodo a una lista complemento
     * @param auxData Nodo padre del nodo actual
     * @param objAux nodo actual
     * @param treeComplement Arbol complemento
     */
  // pushParent(auxData: any[], objAux: { parent: { label: any; data: any; expandedIcon: string; collapsedIcon: string; draggable: boolean; droppable: boolean; }; }, treeComplement: any[]) {
  //   objAux.parent = {
  //     label: auxData[0].Name,
  //     data: auxData[0],
  //     expandedIcon: "fa fa-folder-open",
  //     collapsedIcon: "fa fa-folder",
  //     draggable: true,
  //     droppable: true
  //   };
  //   treeComplement.push(objAux);
  // }

  /**
     * Funcion encargada de generar el arbol de series
     * @param dataTree Array con la información de la maestra series
     * @param NameIdParent Nombre de la propiedad que hace referencia al Id del Padre
     * @param ParentTree Arbol principal
     * @param subDataTree Array con la información de la maestra subseries
     */
  getSubTrees(dataTree: any, NameIdParent: string | number, ParentTree: any, subDataTree: any) {
    let data = dataTree;

    for (let i = 0; i < data.length; i++) {
      let objAux = {
        label: data[i].Name,
        data: data[i],
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        draggable: true,
        droppable: true
      };

      // Se envia el id y la serie actual para generar el arbol completo
      this.getParentOrgUnit(data[i][NameIdParent], objAux, NameIdParent, ParentTree);

      // Se verifica que sea la ultima posicion para generar el arbol de subseries
      if (i == data.length - 1) {
        this.getSubseriesTree(ParentTree, subDataTree);
      }
    }
    return ParentTree;
  }

  /**
     * @param idParent id del padre del nodo actual
     * @param objAux nodo actual
     * @param NameIdParent Nombre de la propiedad que hace referencia al Id del Padre
     * @param ParentTree Arbol principal
     */
  getParentOrgUnit(idParent: any, objAux: { label: any; data: any; expandedIcon: string; collapsedIcon: string; draggable: boolean; droppable: boolean; }, NameIdParent: any, ParentTree: any) {
    this.hasChild(ParentTree, idParent, objAux, NameIdParent);
  }

  /**
     * Funcion recursiva que agrega las series al arbol de unidades organizacionales
     * @param array Arbol principal (Unidades organizacionales)
     * @param idParent id del padre del nodo actual
     * @param NameIdParent Nombre de la propiedad que hace referencia al Id del Padre
     */
  hasChild(array: string | any[], idParent: any, objAux: any, NameIdParent: string | number) {
    //Se recorre cada uno de los nodos actuales del arbol
    for (let i = 0; i < array.length; i++) {
      //Se verifica que el id del padre es el nodo actual i
      if (array[i].data[NameIdParent] == idParent) {
        // Se verifica que el nodo actual no tenga hijos, se crea la propiedad y se
        // agrega el nodo actual
        if (array[i].children == undefined) {
          array[i].children = [];
          array[i]
            .children
            .push(objAux);
        } else {
          //Se agrega el nodo actual
          array[i]
            .children
            .push(objAux);
        }
        return true;
      } else {
        // Si el @idParent no es el nodo actual i se verifica que tenga hijos para así
        // recorrerlos
        if (array[i].children != undefined) {
          /**
            * @param array[i].children Es el conjunto de hijos del nodo actual i
            * @param idParent id del padre del nodo actual
            * @param objAux nodo actual
            */
          this.hasChild(array[i].children, idParent, objAux, NameIdParent);
        }
      }
    }
    return;
  }

  getSubseriesTree(dataTree: any, subDataTree: any) {
    let dataSubseriesUnits = subDataTree;

    for (let i = 0; i < dataSubseriesUnits.length; i++) {
      let objAux = {
        label: dataSubseriesUnits[i].Name,
        data: dataSubseriesUnits[i],
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        draggable: true,
        droppable: true
      };

      this.getParentSeries(dataSubseriesUnits[i].IdSerie, objAux, dataTree);

    }

  }

  getParentSeries(idParent: any, objAux: { label: any; data: any; expandedIcon: string; collapsedIcon: string; draggable: boolean; droppable: boolean; }, dataTree: any) {
    this.hasChildSeries(dataTree, idParent, objAux);
  }

  hasChildSeries(array: string | any[], idParent: any, objAux: any) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].data.IdSerie != undefined && array[i].data.IdSerie == idParent) {
        if (array[i].children == undefined) {
          array[i].children = [];
          array[i]
            .children
            .push(objAux);
        } else {
          array[i]
            .children
            .push(objAux);
        }
        return true;
      } else {
        if (array[i].children != undefined) {
          this.hasChildSeries(array[i].children, idParent, objAux);
        }
      }
    }
    return;
  }

}
