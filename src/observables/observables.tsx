export interface IObservable {
    registerObserver(): void;
    removeObserver(observer: IObserver): void;
    notifyObserver(param: any): void;
}

export interface IObserver {
    update(param: any): void;
}
