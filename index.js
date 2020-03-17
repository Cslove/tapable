const {
	SyncWaterfallHook,
	SyncHook,
	SyncBailHook,
	SyncLoopHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook,
	AsyncParallelHook,
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

// const car = new AsyncSeriesHook()
// car.tap('1', () => { console.log(1) })
// car.tapPromise('2', () => new Promise(r => { console.log('promise2'); r()}))
// car.tapAsync('4', callback => { setTimeout(() => { console.log('1s后', 4); callback() }, 1000) })
// car.tap('3', () => console.log(3))
// car.promise()

// const car = new AsyncSeriesBailHook()
// car.tap('1', () => { console.log(1) })
// car.tapPromise('2', () => new Promise(r => { console.log('promise2'); r()}))
// car.tapAsync('4', callback => { setTimeout(() => { console.log('1s后', 4); callback(null, 'callback finish') }, 1000) })
// car.tap('3', () => console.log(3))
// car.promise().then(v => console.log(v), err => console.log(err))

// const car = new AsyncSeriesWaterfallHook(['haha'])
// car.tap('1', v => { console.log(v); return 'heihei'+ v })
// car.tapAsync('2', (v, callback) => { setTimeout(() => { console.log(v); callback(null, 2) }, 1000);})
// car.tapPromise('3', v => new Promise(r => r(v+3)))
// // car.callAsync('lala', (err, v) => console.log(v))
// car.promise('lala').then(v => console.log(v))

const car = new AsyncParallelHook()
car.tap('1', () => console.log(1))
car.tapAsync('2', () => setTimeout(() => console.log(2), 0))
car.tapPromise('3', () => new Promise(r => { console.log(3); r(3) }).then(v => console.log(v)))
// car.callAsync((err) => { console.log(err) })
car.promise()


