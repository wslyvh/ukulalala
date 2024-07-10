export function getRomanNumeral(i: number) {
    if (i === 1) return 'I'
    if (i === 2) return 'ii'
    if (i === 3) return 'iii'
    if (i === 4) return 'IV'
    if (i === 5) return 'V'
    if (i === 6) return 'vi'
    if (i === 7) return 'vii°'

    console.error('Invalid roman numeral input.')
    return ''    
}