class CityObj {
  constructor(capitalCity, countryCode1, countryCode2, state, Continent, lat, lon) {
    this.capitalCity = capitalCity;
    this.countryCode1 = countryCode1;
    this.countryCode2 = countryCode2;
    this.state = state;
    this.Continent = Continent;
    this.lat = lat;
    this.lon = lon;
  }
};
//
const malawi = new CityObj('Lilongwe', 'MW', 'MWI', '', 'Africa', -13.9669200, 33.7872500);
const jordan = new CityObj('Amman', 'JO', 'JOR', '', 'Asia', 31.9552200, 35.9450300);
const nepal = new CityObj('Kathmandu', 'NP', 'NPL', '', 'Asia', 27.7016900, 85.3206000);
const fiji = new CityObj('Suva', 'FJ', 'FJI', '', 'Oceania', -18.1416100, 178.4414900);
const hawaii = new CityObj('Honolulu', 'US', 'USA', 'HI', 'Oceania', 21.289373, -157.917480);
const peru = new CityObj('Lima', 'PE', 'PER', '', 'South America ',-12.0431800, -77.0282400);
const cambodia = new CityObj('Phnom Penh', 'KH', 'KHM', '', 'Asia',11.5624500, 104.9160100);
const india = new CityObj('New Delhi', 'IN', 'IND', '', 'Asia', 28.644800, 77.216721);
const thailand = new CityObj('Bangkok', 'TH', 'THA', '', 'Asia', 13.7539800, 100.5014400);
const Ecuador = new CityObj('Quito', 'EC', 'ECU', '', 'South America ',-0.2298500, -78.5249500);
const kenya = new CityObj('Nairobi', 'KE', 'KEN', '', 'Africa', -1.2833300, 36.8166700);
const senegal = new CityObj('Dakar', 'SN', 'SEN', '', 'Africa', 14.6937000, -17.4440600);
const philippines = new CityObj('Manila', 'PH', 'PHL', '', 'Asia', 14.6042000, 120.9822000);
//
// console.log('this is malai: ', malawi);
