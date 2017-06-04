function numberVotes(){
    return Math.floor((Math.random()*5));
}

const family=[
    {
        id:1,
        firstname:"Firstname: Lulu",
        lastname:"Lastname: nice",
        gender:"Gender: F",
        img:'https://www.comomola.rocks/wp-content/uploads/icon_app_comomola-fireflies.png',
        votes:numberVotes(),

    },
    {
        id:2,
        firstname:"Firstname: Albi",
        lastname:"Lastname: white",
        gender:"Gender: M",
        img:"https://s-media-cache-ak0.pinimg.com/originals/a1/85/7f/a1857f76663b1b08a3b97b7a07210bc4.png",
        votes:numberVotes(),

    },
    {
        id:3,
        firstname:"Firstname: Stacy",
        lastname:"Lastname: browm",
        gender:"Gender: F",
        img:"http://promo.tutotoons.com/icons/large/328-3.png",
        votes:numberVotes(),

    }
];
export{family,numberVotes};
