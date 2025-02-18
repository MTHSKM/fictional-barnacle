import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage} alt=""></img>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal></NewTransactionModal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}