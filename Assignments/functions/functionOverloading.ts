class PersonalComputer{

        public screenMount(data: number): number;
        public screenMount(data: string): string;
        public screenMount(data: any): any{
                if(typeof(data) === "number")
                return data.toString();
                if(typeof(data) === "string")
                return data.length;
                
        } 
}
        let pcObject = new PersonalComputer();
        console.log("The result is :" + pcObject.screenMount(911));
        let welcomeBrandName = "Linux-distros";
        console.log("The distributor of this Operating system is " + pcObject.screenMount(welcomeBrandName));
