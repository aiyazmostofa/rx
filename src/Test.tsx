import { Component, Accessor, createEffect, createSignal, JSXElement, Show } from "solid-js";

type TestProps = {
    word: string;
    match: boolean;
    regex: Accessor<RegExp>;
}

export const Test: Component<TestProps> = (props) => {
    const [content, setContent] = createSignal<JSXElement[]>([])
    const [correct, setCorrect] = createSignal(false)
    createEffect(() => {
        let lower = 0;
        let upper = -1;

        for (let i = 0; i < props.word.length; i++) {
            for (let j = i; j < props.word.length; j++) {
                if (props.regex().test(props.word.substring(i, j + 1)) && (j + 1 - i) > (upper - lower + 1)) {
                    upper = j;
                    lower = i;
                }
            }
        }

        if (upper - lower + 1 == props.word.length) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }

        let listContent = []
        for (let i = 0; i < props.word.length; i++) {
            if (lower <= i && i <= upper) {
                listContent.push(
                    <span class="bg-blue-300 px-1 rounded-md border border-blue-400">
                        {props.word.substring(i, i + 1)}
                    </span>);
            } else {
                listContent.push(
                    <span class="bg-gray-300 px-1 rounded-md border border-gray-400">
                        {props.word.substring(i, i + 1)}
                    </span>);
            }
        }
        setContent(listContent)
    })

    return (
        <>
            <div class="flex gap-4 font-mono items-center">
                <Show when={props.match} fallback={
                    <p>Skip&nbsp</p>
                }>
                    <p>Match</p>
                </Show>
                <div class="flex gap-0.5">
                    {content().map((char, i) => char)}
                </div>
                <Show when={correct() == props.match} fallback={
                    <i class="fa-solid fa-x text-red-700"></i>
                }>
                    <i class="fa-solid fa-check text-green-700"></i>
                </Show>
            </div>
        </>
    )
}