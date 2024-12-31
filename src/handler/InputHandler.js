import { MissionUtils } from "@woowacourse/mission-utils"

class InputHandler {
    async getInputs() {
        const carName = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n")
        const tryCount = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")

        return {
            carNames: carName.split(',').map(name => name.trim()),
            tryCount: parseInt(tryCount)
        }
    }
}

export default InputHandler