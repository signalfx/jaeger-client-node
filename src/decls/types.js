// @flow
// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import SpanContext from '../span_context.js';

declare type Tag = {
    key: string,
    value: any
};

declare type LogData = {
    timestamp: number,
    fields: Array<Tag>
};

declare type Process = {
    serviceName: string,
    tags?: Array<Tag>
};

declare type Batch = {
    process: Process,
    tags?: Array<Tag>
};

declare type Endpoint = {
    ipv4: number,
    port: number,
    serviceName: string
};

declare type Annotation = {
    timestamp: number,
    value: string,
    host: ?Endpoint
};

declare type BinaryAnnotation = {
    key: string,
    value: any,
    annotationType: string,
    host: ?Endpoint
};

declare type Reference = {
    type(): string;
    referencedContext(): SpanContext;
};

declare type startSpanArgs = {
    operationName?: string,
    childOf?: SpanContext,
    references?: Array<Reference>,
    tags?: any,
    startTime?: number,
};

declare type ProbabilisticSamplingStrategy = {
    samplingRate: number
};

declare type RateLimitingSamplingStrategy = {
    maxTracesPerSecond: number
};

declare type SamplingStrategyResponse = {
    strategyType: number,
    probabilisticSampling?: ProbabilisticSamplingStrategy,
    rateLimitingSampling?: RateLimitingSamplingStrategy
};
