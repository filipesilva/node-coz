# node-coz

This is an experiment following https://github.com/plasma-umass/coz/issues/142 to see if https://github.com/plasma-umass/coz can be used in NodeJS via [N-API bindings](https://github.com/nodejs/node-addon-api).

You can build and run it via docker using these commands:
```
docker run -v $(pwd -W):/src -it --cap-add SYS_ADMIN circleci/node:12 bash
sudo apt-get install coz-profiler
cd /src
yarn
coz run --- node test/fib.js
```

It works, but doesn't profile the source JS files. Instead it profiles the NodeJS C sources.

This is the output of running the tool via `coz run --- node test/fib.js` above:
```
circleci@4b8941827f94:/src$ coz run --- node test/fib.js
[libcoz.cpp:100] bootstrapping coz
[libcoz.cpp:128] Including MAIN, which is /usr/local/bin/node
[inspect.cpp:325] /lib/x86_64-linux-gnu/ld-2.24.so is not in scope
[inspect.cpp:325] /usr/lib/coz-profiler/libcoz.so is not in scope
[inspect.cpp:325] /usr/lib/x86_64-linux-gnu/libdwarf++.so.0 is not in scope
[inspect.cpp:325] /usr/lib/x86_64-linux-gnu/libelf++.so.0 is not in scope
[inspect.cpp:325] /lib/x86_64-linux-gnu/librt-2.24.so is not in scope
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/fs-poll.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/idna.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/inet.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/strscpy.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/threadpool.c
[inspect.cpp:509] Included source file /usr/include/stdlib.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/heap-inl.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/timer.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/uv-data-getter-setters.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/uv-common.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/version.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/async.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/atomic-ops.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/core.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/internal.h
[inspect.cpp:509] Included source file /usr/include/bits/socket.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/dl.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/fs.c
[inspect.cpp:509] Included source file /usr/include/sys/stat.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/getaddrinfo.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/getnameinfo.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/heap-inl.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/internal.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/loop.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/loop-watcher.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/pipe.c
[inspect.cpp:509] Included source file /usr/include/sys/stat.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/poll.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/process.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/signal.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/stream.c
[inspect.cpp:509] Included source file /usr/include/bits/socket.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/tcp.c
[inspect.cpp:509] Included source file /usr/include/stdlib.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/thread.c
[inspect.cpp:509] Included source file /usr/include/pthread.h
[inspect.cpp:509] Included source file /usr/include/stdlib.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/atomic-ops.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/spinlock.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/tty.c
[inspect.cpp:509] Included source file /usr/include/sys/stat.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/udp.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/proctitle.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/internal.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/linux-core.c
[inspect.cpp:509] Included source file /usr/include/stdlib.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/internal.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/linux-inotify.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/linux-syscalls.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/procfs-exepath.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/uv/src/unix/sysinfo-loadavg.c
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/arguments.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-copywithin.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-every.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-filter.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-find.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-findindex.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-foreach.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-join.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-lastindexof.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-map.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-of.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-reduce-right.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-reduce.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-reverse.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-shift.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-slice.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-some.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-splice.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/array-unshift.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/base.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/bigint.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/boolean.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/collections.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/data-view.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/frames.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/growable-fixed-array.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/math.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/object-fromentries.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/object.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-constructor.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-delete-property.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-get-property.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-get-prototype-of.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-has-property.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-is-extensible.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-prevent-extensions.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-revocable.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-set-property.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/proxy-set-prototype-of.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/reflect.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/regexp-replace.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-endswith.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-html.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-iterator.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-repeat.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-slice.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-startswith.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string-substring.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/string.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-createtypedarray.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-every.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-filter.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-find.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-findindex.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-foreach.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-reduce.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-reduceright.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-slice.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-some.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array-subarray.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/src/builtins/typed-array.tq
[inspect.cpp:509] Included source file /home/iojs/build/deps/v8/third_party/v8/builtins/array-sort.tq
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_cancel.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares__close_sockets.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_data.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_destroy.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_expand_name.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_free_hostent.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_free_string.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_gethostbyaddr.c
[inspect.cpp:509] Included source file /usr/include/bits/byteswap.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares__get_hostent.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_init.c
[inspect.cpp:509] Included source file /usr/include/bits/byteswap.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_library_init.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_llist.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_nowarn.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_options.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_aaaa_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_a_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_mx_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_naptr_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_ns_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_ptr_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_soa_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_srv_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_parse_txt_reply.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_process.c
[inspect.cpp:509] Included source file /usr/include/bits/byteswap.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_query.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares__read_line.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_send.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_strdup.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_strerror.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_strsplit.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares__timeval.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/inet_net_pton.c
[inspect.cpp:509] Included source file /usr/include/ctype.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_create_query.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_expand_string.c
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/ares_getnameinfo.c
[inspect.cpp:509] Included source file /usr/include/ctype.h
[inspect.cpp:509] Included source file /home/iojs/build/ws/deps/cares/src/inet_ntop.c
[inspect.cpp:317] Including lines from executable /usr/local/bin/node
[inspect.cpp:325] /lib/x86_64-linux-gnu/libm-2.24.so is not in scope
[inspect.cpp:325] /lib/x86_64-linux-gnu/libc-2.24.so is not in scope
[inspect.cpp:325] /lib/x86_64-linux-gnu/libpthread-2.24.so is not in scope
[inspect.cpp:325] /lib/x86_64-linux-gnu/libdl-2.24.so is not in scope
[inspect.cpp:325] /lib/x86_64-linux-gnu/libgcc_s.so.1 is not in scope
[inspect.cpp:325] /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.22 is not in scope
[profiler.cpp:75] Starting profiler thread
102334155
```

And this is the content of `profile.coz`:
```
startup	time=1571434501922977100
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:300	speedup=0.70	duration=500114500	selected-samples=0
throughput-point	name=../addon.cpp:13	delta=4920122
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.55	duration=225690200	selected-samples=499
throughput-point	name=../addon.cpp:13	delta=5225717
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.70	duration=150121600	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=5455534
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500115100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=5319146
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.50	duration=250178100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=4955563
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500174100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=5546241
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.45	duration=275119000	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=5798535
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.85	duration=100604000	selected-samples=470
throughput-point	name=../addon.cpp:13	delta=5098217
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.45	duration=275591800	selected-samples=499
throughput-point	name=../addon.cpp:13	delta=5701811
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.50	duration=250172700	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6483727
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.80	duration=100150800	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6862745
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.60	duration=200167500	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6985120
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.40	duration=300147900	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=7044031
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.70	duration=150180400	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6911576
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.50	duration=250154900	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6984834
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.95	duration=25160400	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6351132
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500137000	selected-samples=498
throughput-point	name=../addon.cpp:13	delta=6162776
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.35	duration=326908800	selected-samples=495
throughput-point	name=../addon.cpp:13	delta=6436658
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.05	duration=475109300	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6221851
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.85	duration=75119200	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6406353
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.95	duration=25114700	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6840457
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.45	duration=275113600	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6458151
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.70	duration=150144300	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6318257
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.90	duration=50152100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6786709
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.50	duration=250127500	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6297684
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500092700	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6624398
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500122200	selected-samples=499
throughput-point	name=../addon.cpp:13	delta=6895860
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.10	duration=451207700	selected-samples=489
throughput-point	name=../addon.cpp:13	delta=6928424
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500088000	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=7008804
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500152400	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6982700
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.15	duration=425109100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6876329
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.55	duration=220207400	selected-samples=509
throughput-point	name=../addon.cpp:13	delta=6932115
runtime	time=500192800
samples	location=/home/iojs/build/deps/v8/src/builtins/base.tq:300	count=2
samples	location=/home/iojs/build/deps/v8/src/builtins/base.tq:325	count=16262
samples	location=/home/iojs/build/deps/v8/src/builtins/base.tq:3028	count=28
samples	location=/home/iojs/build/deps/v8/src/builtins/string.tq:81	count=1
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.95	duration=25144900	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6980780
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500130600	selected-samples=499
throughput-point	name=../addon.cpp:13	delta=6959277
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500090200	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6876879
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.70	duration=150133600	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6986792
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500148500	selected-samples=499
throughput-point	name=../addon.cpp:13	delta=7114601
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.05	duration=475141600	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6942610
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.20	duration=400155000	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6758062
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500137000	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6709317
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.85	duration=75146600	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6848932
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.85	duration=75105500	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=7006986
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.35	duration=325133100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6908066
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500139700	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6939200
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500141000	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=7000866
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.25	duration=375138700	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6948744
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.05	duration=475112600	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6760338
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.45	duration=275155100	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6684221
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.70	duration=150104700	selected-samples=500
throughput-point	name=../addon.cpp:13	delta=6972128
experiment	selected=/home/iojs/build/deps/v8/src/builtins/base.tq:325	speedup=0.00	duration=500213100	selected-samples=392
throughput-point	name=../addon.cpp:13	delta=5343574
runtime	time=34967389100
samples	location=/home/iojs/build/deps/v8/src/builtins/base.tq:300	count=2
samples	location=/home/iojs/build/deps/v8/src/builtins/base.tq:325	count=25332
samples	location=/home/iojs/build/deps/v8/src/builtins/base.tq:3028	count=33
samples	location=/home/iojs/build/deps/v8/src/builtins/string.tq:81	count=1
```
