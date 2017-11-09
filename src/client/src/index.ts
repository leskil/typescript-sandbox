export class HelloWorld {
    SayHello(name: string): string {
        if (name == null)
            throw new Error("name cannot be null")
            
        return "Hello " + name
    }
}