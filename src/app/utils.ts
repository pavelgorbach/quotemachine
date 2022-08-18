
export const randomNum = (max = 255) => Math.floor(Math.random() * max)

export const randomRGB = () => {
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}