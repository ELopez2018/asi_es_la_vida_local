import { CoordinatorACLModel } from '@root/shared/common-authorization/core/models/coordinator-acl.model'
import { environment } from '@environments/environment'

export const mockACL = (): CoordinatorACLModel[] => {
    return [
        {
            // Información del Rol
            Role: {
                Id: '13123',
                Name: 'Administrador',
                Code: 'ADMIN',
            },
            ACL: [
                // `${environment.TENANT_ID}.${environment.APPLICATION_ID}/MODULE/CONFIGURATIONS/VIEW/DOCUMENTS_TYPE/RESOURCE/CANCEL/READ`, // OTRA FORMA QUE SE PIENSA MAPEAR
                // MODULE
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/HOME/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/MANAGEMENT/*`,
                // VIEW
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/CONTRATATION_TYPE/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/CURRENCY_TYPE/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/PROVIDER/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/PAYMENT_TYPE/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/QUANTITY_TYPE/*`,

                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/CONTRACT_TYPE/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/DELIVERABLE_TYPE/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/READJUSTMENT_TYPE/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/TIME_UNIT/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/ADDITIONAL_CLAUSES/*`,
                `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/FORMAT_LETTER/*`,

            ]
        },
        // {
        //     // Información del Rol
        //     Role: {
        //         Id: '13123',
        //         Name: 'Administrador de contrato',
        //         Code: 'ADMIN',
        //     },
        //     ACL: [
        //         // `${environment.TENANT_ID}.${environment.APPLICATION_ID}/MODULE/CONFIGURATIONS/VIEW/DOCUMENTS_TYPE/RESOURCE/CANCEL/READ`, // OTRA FORMA QUE SE PIENSA MAPEAR
        //         // MODULE
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/*`,
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/HOME/*`,
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/MANAGEMENT/*`,
        //         // VIEW
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/CONTRATATION_TYPE/*`,
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/CURRENCY_TYPE/*`,
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/PAYMENT_TYPE/*`,
        //         `${environment.TENANT_ID}.${environment.APPLICATION_ID}/CONFIGURATIONS/QUANTITY_TYPE/*`,

        //     ]
        // }
    ]
}
