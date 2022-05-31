import { AccountingInformationModel } from '@models/management/accounting-information.model';

export const mockAccountingInformation = () => (
  {
    ConditionText: "test",
    Currency: "COP",
    IVA: 12,
    QuantityDetermination: "12",
    PaymentType: "transfer",
    Readjustment: true,
    ReadjustmentReason: "none",
    ReadjustmentType: "none",
    QuantityType: "none",
    TotalValue: 10,
  }
)
