function getHimmelsrichtung(grad) {
  const ost = 45;
  const süd = 135;
  const west = 225;
  const nord = 315;

  if (grad >= ost && grad < süd) {
    return "Ost";
  } else if (grad >= süd && grad < west) {
    return "Süd";
  } else if (grad >= west && grad < nord) {
    return "West";
  } else {
    return "Nord";
  }
}

const himmelsrichtung = getHimmelsrichtung(windRichtung);
console.log(himmelsrichtung);
