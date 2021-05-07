export class SessionService{
  public static set(key:string, obj:any){
    localStorage.setItem(key, JSON.stringify(obj))
  }

  public static get(key:string){
    try{
      return JSON.parse(localStorage.getItem(key))
    }
    catch(e){
      return null
    }
  }

  public static remove(key:string){
    localStorage.removeItem(key)
  }
}
