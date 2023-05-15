// 1
emptyArray = [];
// 2
arrayWithMoreThan5Elements = ["1", "2", "3", "4", "5", "6"];
// 3
lengthOfArray = arrayWithMoreThan5Elements.length;
// 4
firstItem = arrayWithMoreThan5Elements[0];
middleItem = arrayWithMoreThan5Elements[Math.round((lengthOfArray - 1) / 2)];
lastItem = arrayWithMoreThan5Elements[lengthOfArray - 1];
// 5
mixedDataTypes = ["1", 1, true, "three", false, 4];
// 6
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// 7
console.log(itCompanies);
// 8
console.log(itCompanies.length);
// 9
console.log(itCompanies[0])
console.log(itCompanies[Math.round((itCompanies.length - 1) / 2)])
console.log(itCompanies[itCompanies.length - 1])
// 10
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}
// 11
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}
// 12
for (let i = 0; i < itCompanies.length; i++) {
    if (i < itCompanies.length - 1)
    process.stdout.write(itCompanies[i] + ", ")
    if (i == itCompanies.length - 1) {
        process.stdout.write(" and " + itCompanies[i])
    }
}
process.stdout.write(" are big IT companies.");
console.log();
// 13
const company = "Flipkart";
flag = false;
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] == company) {
        console.log(company);
        flag = true;
    }
}
if (flag == false) {
    console.log("Company is Not Found");
}
// 14
companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i];
    for (let j = 0; j < company.length; j++) {
        if (company.indexOf(itCompanies[i][j] !== company.lastIndexOf(itCompanies[i][j])) && company[j] == "o") {
            companiesWithMoreThanOneO.push(company);
        }
    }
}
console.log(companiesWithMoreThanOneO)
// 15
console.log(itCompanies.sort())