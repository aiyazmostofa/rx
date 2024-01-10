import { Component, createSignal, For } from "solid-js"
import { Test } from "./Test"

export type PageProps = {
    title: string;
    matches: string[];
    skips: string[];
}

export const Page: Component<PageProps> = (props) => {
    const [regex, setRegex] = createSignal(new RegExp("^$"))

    return (
        <>
            <div class="flex flex-col gap-3">
                <p class="text-3xl font-bold mb-2">{props.title}</p>
                <For each={props.matches}>{(word, i) => <Test word={word} regex={regex} match={true} />}
                </For>
                <For each={props.skips}>{(word, i) => <Test word={word} regex={regex} match={false} />}
                </For>

                <div class="flex gap-4 items-center self-center">
                    <p>Regex</p>
                    <input type="text"
                        class="outline outline-1 rounded-md outline-gray-400 px-2 py-1"
                        onInput={(event) => {
                            setRegex(new RegExp("^" + event.target.value + "$"))
                        }}>
                    </input>
                </div>
            </div>
        </>
    )
}