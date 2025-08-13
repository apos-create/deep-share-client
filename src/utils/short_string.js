const shortString = (str, maxLength)=>{
    if(typeof str !== "string") return "";

    // Remove extra spaces
    let cleaned = str.trim().replace(/\s+/g, " ");


    // if already short enough
    if(cleaned.length <= maxLength) return cleaned;

    // truncate and add dots
    return cleaned.slice(0, maxLength) + "...";
};

export default shortString;