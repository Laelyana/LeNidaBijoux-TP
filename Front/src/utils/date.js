function newDate(date) {
  const date1 = new Date(date);
  const jour = date1.getDate();
  const mois = (date1.getMonth() + 1);
  const annee = date1.getFullYear();
  const dateFinale = `${jour}/${mois}/${annee}`;
  return dateFinale;
}
export default newDate;
