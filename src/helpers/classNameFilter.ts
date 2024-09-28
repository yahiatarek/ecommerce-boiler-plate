export function classNameFilter(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}