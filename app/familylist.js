function numberVotes(){
    return Math.floor((Math.random()*5));
}

const family=[
    {
        // id:1,
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
        img:"https://sites.google.com/a/bentonschools.org/benton-middle-school/_/rsrc/1448029672011/home/counselors-page/boy-cartoon-md.png?height=200&width=105",
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
