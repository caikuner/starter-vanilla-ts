export const one = 1
export const two = 2

export function sendMessage(message: string, date = new Date(), flash?: boolean): string {
  return 'OK'
}

export const config = {
  name: 'default',
  price: 12.5,
  /**
   * checked state
   */
  checked: false,
  dimensions: {
    /** width in px */
    width: 10,
    /** height in px */
    height: 10,
  },
  tags: (val: Array<string>) => ['common-tag'].concat(val),
}
