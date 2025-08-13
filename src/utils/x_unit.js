const x_unit = (date) =>{
    const now = new Date();
    const past = new Date(date);

    const diffInSeconds = Math.floor((now - past)/1000);
    
    const units = [
        {
            name: "y",
            seconds: 31536000
        },
        {
            name: "m",
            seconds: 2592000
        },
        {
            name: "d",
            seconds:86400
        },
        {
            name:"h",
            seconds:3600
        },
        {
            name: "m",
            seconds:60
        },
        {
            name:"s",
            seconds:1
        }
    ];

    for(const unit of units){
        const count = Math.floor(diffInSeconds / unit.seconds);
        
        if(count >= 1){
            return `${count}${unit.name}`;
        }
    };

    return "just now";
};

export {x_unit};

