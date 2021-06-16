class RomanNumerals {
    static toRoman = (decimalNumber) => {
        const ROMANS = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        let roman = '';
        let num = decimalNumber;
        for ( let i in ROMANS ) {
            const noOfTimes = num / ROMANS[i];
            
            if (noOfTimes !== 0) {
                roman += String(i).repeat(noOfTimes);
                num %= ROMANS[i];
            }
          }
          return roman;
    }

    static fromRoman = (romanNumber) => {
        if (!romanNumber) {
            return '';
        }

        const DECIMALS = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 1,
            I: 1
        };
        let decimal = 0;
        let romanArray = romanNumber.toUpperCase().split('');
        for (let i = 0; i < romanArray.length; i++) {
            const currValue = DECIMALS[romanArray[i]];
            const nextValue = i + 1 >= romanArray.length ? 0 : DECIMALS[romanArray[i + 1]];

            if (currValue >= nextValue) {
                decimal += currValue;
            } else {
                decimal += (nextValue - currValue);
                i++;
            }
        }
        return decimal;
    }
}

export default RomanNumerals;