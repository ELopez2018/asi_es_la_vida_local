import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { NotifierComponent } from "@root/shared/notifier/notifier.component";


@Injectable({
    providedIn: "root",
})
export class MessageService {
    constructor(private snackBar: MatSnackBar) {}
    /**
     *
     * @param message mensaje: una cadena de texto
     * @param buttontex button: titulo del boton
     */
    showStandar(message:string, buttontex:string) {
        this.snackBar.open(message, buttontex, {
            duration: 5000,
            horizontalPosition: "center",
            verticalPosition: "bottom",
        });
    }
    /**
     *
     * @param message mensaje: una cadena de texto
     * @param buttontex button: titulo del mensaje
     * @param messageType  cadena de texto con las opciones error, success, warn
     */
    showCustom(
        message: string,
        buttontex: string | null = null,
        messageType: "error" | "success" | "warn"
    ) {
        let timeDuration;
        switch (messageType) {
            case "error":
                timeDuration = 5000;
                break;
            case "success":
                timeDuration = 2000;
                break;
            case "warn":
                timeDuration = 5000;
                break;
            default:
                timeDuration = 2000;
        }
        this.snackBar.openFromComponent(NotifierComponent, {
            data: {
                message,
                buttontex,
                type: messageType,
            },
            duration: timeDuration,
            horizontalPosition: "center",
            verticalPosition: "bottom",
            panelClass: messageType,
        });
    }
}
