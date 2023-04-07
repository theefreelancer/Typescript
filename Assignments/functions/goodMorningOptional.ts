function goodMorning(name?: string): string{
        const suffix = (name? `,${name} .`: '.');
        return 'GoodMorning' + suffix;
}

console.log(goodMorning());

console.log(goodMorning('Ronald'));