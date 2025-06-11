function calcolaSegnoZodiacale() {
            const nome = document.getElementById('nome').value;
            const dataNascita = document.getElementById('dataNascita').value;
            const sesso = document.getElementById('sesso').value;
            const resultBox = document.getElementById('resultBox');

            if (!nome || !dataNascita || !sesso) {
                resultBox.innerHTML = '<span style="color: red;">Per favore, compila tutti i campi.</span>';
                return;
            }

            const data = new Date(dataNascita);
            const giorno = data.getDate();
            const mese = data.getMonth() + 1; // getMonth() restituisce 0 per Gennaio, 11 per Dicembre

            let segnoZodiacale = '';

            if ((mese === 3 && giorno >= 21) || (mese === 4 && giorno <= 19)) {
                segnoZodiacale = 'Ariete';
            } else if ((mese === 4 && giorno >= 20) || (mese === 5 && giorno <= 20)) {
                segnoZodiacale = 'Toro';
            } else if ((mese === 5 && giorno >= 21) || (mese === 6 && giorno <= 20)) {
                segnoZodiacale = 'Gemelli';
            } else if ((mese === 6 && giorno >= 21) || (mese === 7 && giorno <= 22)) {
                segnoZodiacale = 'Cancro';
            } else if ((mese === 7 && giorno >= 23) || (mese === 8 && giorno <= 22)) {
                segnoZodiacale = 'Leone';
            } else if ((mese === 8 && giorno >= 23) || (mese === 9 && giorno <= 22)) {
                segnoZodiacale = 'Vergine';
            } else if ((mese === 9 && giorno >= 23) || (mese === 10 && giorno <= 22)) {
                segnoZodiacale = 'Bilancia';
            } else if ((mese === 10 && giorno >= 23) || (mese === 11 && giorno <= 21)) {
                segnoZodiacale = 'Scorpione';
            } else if ((mese === 11 && giorno >= 22) || (mese === 12 && giorno <= 21)) {
                segnoZodiacale = 'Sagittario';
            } else if ((mese === 12 && giorno >= 22) || (mese === 1 && giorno <= 19)) {
                segnoZodiacale = 'Capricorno';
            } else if ((mese === 1 && giorno >= 20) || (mese === 2 && giorno <= 18)) {
                segnoZodiacale = 'Acquario';
            } else if ((mese === 2 && giorno >= 19) || (mese === 3 && giorno <= 20)) {
                segnoZodiacale = 'Pesci';
            } else {
                segnoZodiacale = 'Data non valida o non rientra in un segno conosciuto.';
            }

            resultBox.innerHTML = `Ciao ${nome}, il tuo segno zodiacale è: <strong>${segnoZodiacale}</strong>.`;
        }