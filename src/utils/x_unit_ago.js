const x_unit_ago = (date) => {
    const now = new Date();
    const past = new Date(date);

    const diffInSeconds = Math.floor((now - past) / 1000);
 
    const units = [
        {
            name: "year",
            seconds: 31536000
        },
        {
            name: "month",
            seconds: 2592000
        },
        {
            name: "day",
            seconds: 86400
        },
        {
            name: "hr",
            seconds: 3600
        },
        {
            name: "min",
            seconds: 60
        },
        {
            name: "sec",
            seconds: 1
        }
    ];

    for (const unit of units) {
        const count = Math.floor(diffInSeconds / unit.seconds);
        if (count >= 1) {
            return `${count} ${unit.name}${count > 1 ? "s" : ""} ago`;
        }
    }

    return "just now"
};

export {x_unit_ago};