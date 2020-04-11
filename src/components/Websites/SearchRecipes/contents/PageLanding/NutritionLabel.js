import React from 'react'

const NutritionLabel = (nutrition, serving) => {

  /** Source: NHS Live Well, 
    *  Per 100gm */

  /** Color Variables */
  const bgColourHigh = 'red';
  const bgColourMedium = 'yellow';
  const bgColourLow = 'green';

  /** Nutrition Lable Variable and healthy quantityn */
  const Energy = 'Energy';
  const EnergyHigh = 450;
  const EnergyLow = 250;

  const Fat = 'Fat';
  const FatHigh = 17.5;
  const FatLow = 3;

  const Saturated = 'Saturated';
  const SaturatedHigh = 5;
  const SaturatedLow = 1.5;

  const Sugar = 'Sugar';
  const SugarHigh = 22.5;
  const SugarLow = 5

  const Salt = 'Salt';
  const SaltHigh = 1.5;
  const SaltLow = 0.3;

  const standardLabel = (label, nutrition, serving) => {

    let qty = Math.round(nutrition.quantity / serving);
    let bgColour = '';

    if (label === Energy) {
      if (qty >= EnergyHigh) {
        bgColour = bgColourHigh;
      }
      if (qty <= EnergyLow) {
        bgColour = bgColourLow;
      }
      if (qty < EnergyHigh && qty > EnergyLow) {
        bgColour = bgColourMedium;
      }
    }

    if (label === Fat) {
      if (qty >= FatHigh) {
        bgColour = bgColourHigh;
      } if (qty <= FatLow) {
        bgColour = bgColourLow;
      }
      if (qty < FatHigh && qty > FatLow) {
        bgColour = bgColourMedium;
      }
    }

    if (label === Saturated) {
      if (qty >= SaturatedHigh) {
        bgColour = bgColourHigh;
      } if (qty <= SaturatedLow) {
        bgColour = bgColourLow;
      }
      if (qty < SaturatedHigh && qty > SaturatedLow) {
        bgColour = bgColourMedium;
      }
    }

    if (label === Sugar) {
      if (qty >= SugarHigh) {
        bgColour = bgColourHigh;
      } if (qty <= SugarLow) {
        bgColour = bgColourLow;
      }
      if (qty < SugarHigh && qty > SugarLow) {
        bgColour = bgColourMedium;
      }
    }

    if (label === Salt) {
      if (qty >= SaltHigh) {
        bgColour = bgColourHigh;
      } if (qty <= SaltLow) {
        bgColour = bgColourLow;
      }
      if (qty < SaltHigh && qty > SaltLow) {
        bgColour = bgColourMedium;
      }
    }



    return nutrition
      ?
      <li className="nutrition-value" style={{ backgroundColor: bgColour }} >
        <div className="label"><i>{label}</i></div>
        <div className="contain">
          <span className="qty">{qty}</span>
          <span className="unit">{nutrition.unit}</span>
        </div>
      </li >
      : '-';
  }

  return (
    <div>
      <ul>
        {standardLabel(Energy, nutrition.nutrition.ENERC_KCAL, nutrition.serving)}
        {standardLabel(Fat, nutrition.nutrition.FAT, nutrition.serving)}
        {standardLabel(Saturated, nutrition.nutrition.FASAT, nutrition.serving)}
        {standardLabel(Sugar, nutrition.nutrition.SUGAR, nutrition.serving)}
        {standardLabel(Salt, nutrition.nutrition.NA, nutrition.serving)}
      </ul>
    </div>
  )
}

export default NutritionLabel
