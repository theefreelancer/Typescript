import type {Expect, NotAny, Equal} from '.utils/'
type HelloWorld = string;

type cases = [
        Expect<NotAny<HelloWorld>>,
        Expect<Equal<HelloWorld, string>>
];

export {}