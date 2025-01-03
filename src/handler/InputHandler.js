import { MissionUtils } from "@woowacourse/mission-utils"
import Validation from "../validation/Validation.js"

class InputHandler {
    async getInputs() {
        try {
            const carName = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n")
            const carNamesArray = carName.split(',').map(name => name.trim())
            Validation.validationCarNames(carNamesArray)

            const tryCount = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
            Validation.validationTryCount(tryCount)

            return {
                carNames: carNamesArray,
                tryCount: parseInt(tryCount)
            }
        } catch(error) {
            MissionUtils.Console.print(error.message)
            throw error
        }
    }
}

export default InputHandler