export function subtractTimes(a: Date, b: Date): number {
    return a.getTime() - b.getTime();
}

export function addTimes(a: Date, b: Date): number {
    return a.getTime() + b.getTime();
}

export function pretifyAsTime(a: number): string {
    return `${Math.floor(a / 3600000)}:${Math.floor(a / 60000) % 60}:${Math.floor(a / 1000) % 60}.${a % 1000}`;
}

export function pretifyAsDate(d: Date): string {
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
}