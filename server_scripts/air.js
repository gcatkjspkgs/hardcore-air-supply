onEvent('player.tick', event => {
    if (event.player.underWater) {
        let level = event.player.y
        let air = event.player.getAirSupply()
        let effects = event.player.potionEffects
        let changeAir = (number) => event.player.setAirSupply(air + number)
        if (level < 62 && !effects.isActive('minecraft:water_breathing')) {
            if (air > 0 || air < 299) {
                if (level < 0 && air > 0 && air < 299) {
                    changeAir(level * 0.1 + 0.12)
                }
                if (level > 0 && air > 0 && air < 299) {
                    changeAir(level / 100 + 0.385)
                }
                if (level == 0 && air > 0 && air < 299) {
                    changeAir(-0.1)
                }
            }
        }
    }
})