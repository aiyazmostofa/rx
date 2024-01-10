import { Show, createSignal, JSXElement } from "solid-js"
import { Page } from "./Page"

function App() {
  const pages: JSXElement[] = [
    Page({
      title: "Hello there!",
      matches: [
        "capybara",
        "capybara",
        "capybara",
        "capybara",
        "capybara",
        "capybara"
      ],
      skips: []
    }),
    Page({
      title: "Phone Numbers",
      matches: [
        "123-456-7890",
        "098-765-4321",
        "832-713-1324",
      ],
      skips: [
        "1234-567-890",
        "098-765-432",
        "abc-def-ghij",
      ]
    }),
    Page({
      title: "CFISD Emails",
      matches: [
        "bhul0123@stu.cfisd.net",
        "jcar0456@stu.cfisd.net",
        "sarm0212@stu.cfisd.net",
      ],
      skips: [
        "bhul1123@stu.cfisd.net",
        "jcar@stu.cfisd.net",
        "sarm0212@stu-cfisd.net",
      ]
    }),
    Page({
      title: "Names I",
      matches: [
        "John",
        "Jack",
        "Adam",
      ],
      skips: [
        "Jim",
        "Benjamin",
        "Anthony",
      ]
    }),
    Page({
      title: "Names II",
      matches: [
        "Carl",
        "Noah",
        "Zach",
      ],
      skips: [
        "John",
        "Adam",
        "Benjamin",
      ]
    }),
    Page({
      title: "Multiplication",
      matches: [
        "(90)(345)",
        "(65)(863)(1384)",
        "(113)(932)(6879)(234)",
      ],
      skips: [
        "(23)",
        "(abc)(231)",
        "(348)(231)(342",
      ]
    }),
  ]
  const [page, setPage] = createSignal(0)
  return (
    <>
      <div class="flex h-screen items-center justify-center flex-col gap-4">
        {pages[page()]}
        <div class="flex gap-36 mt-2">
          <Show when={page() > 0} fallback={
            <p>Back</p>
          }>
            <button class="underline text-blue-500" onclick={() => {
              setPage(page() - 1);
            }}>Back</button>
          </Show>

          <Show when={page() < pages.length - 1} fallback={
            <p>Next</p>
          }>
            <button class="underline text-blue-500" onclick={() => {
              setPage(page() + 1);
            }}>Next</button>
          </Show>
        </div>
      </div>
    </>
  )
}

export default App
