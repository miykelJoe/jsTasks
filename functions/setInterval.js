let index = 0

            setInterval(function(){
                const date = new Date()
                const sec = date.getSeconds()
                const min = date.getMinutes()
                const yr = date.getHours()
                console.clear()
                console.log('Your Time is ', `${yr} : ${min} : ${sec}`)
            }, 1000)