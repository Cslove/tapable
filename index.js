const {
	SyncWaterfallHook,
	SyncHook,
	SyncBailHook,
	SyncLoopHook,
	AsyncSeriesHook,
} = require('./lib')

// const car = new SyncWaterfallHook(['hello'])
// car.tap('1', v => '222' + v)
// car.tap('2', v => '333' + v)
// console.log(car.call('1111'))

// const car = new SyncHook()
// const calls = []
// car.tap('1', () => { calls.push(1) })
// car.tap('2', () => { calls.push(2) })
// car.tap('3', () => { calls.push(3) })
// car.tap({
// 	before: ['3'],
// 	name: '4'
// }, () => { calls.push(4) })
// car.call()
// console.log(calls)

// const car = new SyncBailHook()
// car.tap('1', () => console.log(1))
// car.tap({
// 	name: '2',
// 	before: '1',
// }, () => { console.log(2); return 'finally' })
// car.tap('3', () => console.log(3))
// console.log('最终输出:', car.call() )

// const car = new SyncLoopHook()
// const calls = []
// car.tap('1', () => { console.log(1) })
// car.tap('2', () => { console.log(2); return 2 })
// car.tap('3', () => { calls.push(3) })
// car.tap({
// 	before: ['3'],
// 	name: '4'
// }, () => { calls.push(4) })
// car.call()
// console.log(calls)

// const car = new AsyncSeriesHook()
// car.tap('1', () => { console.log(1) })
// car.tapAsync('4', callback => { setTimeout(() => { console.log('1s后', 4); callback() }, 1000) })
// car.tap('3', () => console.log(3))
// car.callAsync(err => { if (err) throw new Error(err); })

const car = new AsyncSeriesHook()
car.tap('1', () => { console.log(1) })
car.tapPromise('2', () => new Promise(r => { console.log('promise2'); r()}))
car.tapAsync('4', callback => { setTimeout(() => { console.log('1s后', 4); callback() }, 1000) })
car.tap('3', () => console.log(3))
car.promise()


