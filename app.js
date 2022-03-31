
/**Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato */


const app = new Vue({
    el: "#app",
    data:
    {
        newText: "",
        contacts: [

            {

                name: 'Michele',

                foto: './img/avatar_1.jpg',

                avatar: '_1',

                visible: true,

                messages: [

                    {

                        date: '10/01/2020 15:30:55',

                        text: 'Hai portato a spasso il cane?',

                        status: 'sent',

                    },

                    {

                        date: '10/01/2020 15:50:00',

                        text: 'Ricordati di dargli da mangiare',

                        status: 'sent'

                    },

                    {

                        date: '10/01/2020 16:15:22',

                        text: 'Tutto fatto!',

                        status: 'received'

                    }

                ],

            },



            {

                name: 'Fabio',

                foto: './img/avatar_2.jpg',

                avatar: '_2',

                visible: true,

                messages: [

                    {

                        date: '20/03/2020 16:30:00',

                        text: 'Ciao come stai?',

                        status: 'sent'

                    },

                    {

                        date: '20/03/2020 16:30:55',

                        text: 'Bene grazie! Stasera ci vediamo?',

                        status: 'received'

                    },

                    {

                        date: '20/03/2020 16:35:00',

                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',

                        status: 'sent'

                    }

                ],

            },




            {

                name: 'Samuele',

                foto: './img/avatar_3.jpg',

                avatar: '_3',

                visible: true,

                messages: [

                    {

                        date: '28/03/2020 10:10:40',

                        text: 'La Marianna va in campagna',

                        status: 'received'

                    },

                    {

                        date: '28/03/2020 10:20:10',

                        text: 'Sicuro di non aver sbagliato chat?',

                        status: 'sent'

                    },

                    {

                        date: '28/03/2020 16:15:22',

                        text: 'Ah scusa!',

                        status: 'received'

                    }

                ],

            },




            {

                name: 'Luisa',

                foto: './img/avatar_4.jpg',

                avatar: '_4',

                visible: true,

                messages: [

                    {

                        date: '10/01/2020 15:30:55',

                        text: 'Lo sai che ha aperto una nuova pizzeria?',

                        status: 'sent'

                    },

                    {

                        date: '10/01/2020 15:50:00',

                        text: 'Si, ma preferirei andare al cinema',

                        status: 'received'

                    }

                ],

            },

        ],

        activeContact: 0,

    },
    methods: {
        addText() {

            //this.text.push(this.newText)
            let newMessage = this.newText;

            let contactActive = this.contacts[this.activeContact]

            contactActive.messages.push({

                date: moment().format('DD/MM/YYYY hh:mm:ss'),

                text: newMessage,

                status: 'sent'

            })
            this.newText = "";
            setTimeout(() => {
                contactActive.messages.push({

                    date: moment().format('DD/MM/YYYY hh:mm:ss'),

                    text: `ok`,

                    status: 'received'

                })
            }, 1000)
        },
    }




})

