<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
   
const selectedCountries = [
  "AOA", "BWP", "SZL", "LSL", "MZN", "NAD", "ZAR", "ZMB", "ZWL",
  "KES", "NGN", "GHS", "CAD", "CNY", "GBP", "EUR", "ITL", "ESP", "USD"
];
const country_list = {
	"AED" : "AD",
  	"AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "GB-ENG",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMW" : "ZM",
    "ZWL" : "ZW"
        };

      const apiKey = "1c40d4108d9544df8f9aa92f";
  const apiUrl = `https://v6.exchangerate-api.com/v6/1c40d4108d9544df8f9aa92f/latest/USD`;

function updateFlags() {
    const fromCode = fromCurrency.value;
    const toCode = toCurrency.value;

    fromFlag.src = `https://flagcdn.com/48x36/${country_list[fromCode].toLowerCase()}.png`;
    toFlag.src = `https://flagcdn.com/48x36/${country_list[toCode].toLowerCase()}.png`;
}



  function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const inputAmount = parseFloat(amount.value);
    const resultDiv = document.getElementById("result");
    const unitPriceFrom = document.getElementById("unit-price-from");
    const unitPriceTo = document.getElementById("unit-price-to");

    if (isNaN(inputAmount)) {
      resultDiv.textContent = "Exchange Rate";
      return;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRates = data.conversion_rates;

        if (from === to) {
          resultDiv.textContent = " " + inputAmount + " " + from;
        } else if (exchangeRates[from] && exchangeRates[to]) {
          const conversionRate = exchangeRates[to] / exchangeRates[from];
          const result = inputAmount * conversionRate;
          resultDiv.textContent = "  " + result.toFixed(2) + " " + to;

          // Display the exchange rate
          unitPriceFrom.textContent = `1 ${from} = ${conversionRate.toFixed(4)} ${to}`;
          unitPriceTo.textContent = `1 ${to} = ${(1 / conversionRate).toFixed(4)} ${from}`;
        } else {
          resultDiv.textContent = "Invalid currency selection.";
        }

        // Update flags
        updateFlags();
      })
      .catch((error) => {
        resultDiv.textContent = "Failed to fetch exchange rates. Please try again later.";
        console.error(error);
      });
  }
document.addEventListener("DOMContentLoaded", function () {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amount = document.getElementById("amount");
  const fromFlag = document.getElementById("fromFlag");
  const toFlag = document.getElementById("toFlag");

  // Set the default Australian flag for #toFlag
//   toFlag.src = "https://flagcdn.com/48x36/au.png";
	toFlag.src = "https://flagcdn.com/en/codes.json";
	
  
  // Populate the currency dropdowns with API data
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRates = data.conversion_rates;
      for (const currency in exchangeRates) {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);
      }
      // Initialize flags
      updateFlags();
    });

  // Add event listeners to trigger conversion
  fromCurrency.addEventListener("change", convertCurrency);
  toCurrency.addEventListener("change", convertCurrency);
  amount.addEventListener("input", convertCurrency); // Listen to input events

  // Trigger the initial conversion
  convertCurrency();
});</script>
<!-- end Simple Custom CSS and JS -->
