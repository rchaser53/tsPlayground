declare module "firebase" {
	export function initializeApp(config:any):void;
	export function auth():{
		signInWithEmailAndPassword:<T>(email:string, password:string)=>Promise<T>;
	}
}