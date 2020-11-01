export class DisposalInfo {
  public id: number;

  /**
   * Договор о передаче в собственность / Смерть
   */
  public reason: string;

  public documentNumber: string;

  public documentDate: string;

  /**
   * Наименование юрлица
   */
  public legalName: string;

  /**
   * Адрес юрлица /физлица
   */
  public address: string;

  /**
   * ФИО опекуна
   */
  public guardianName: string;

  /**
   * ФИО физлица
   */
  public individualName: string;

  // Если умер
  public deathAct: string;

  public deathDate: string;
}
