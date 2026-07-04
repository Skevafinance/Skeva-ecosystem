use anchor_lang::prelude::*;

declare_id!("SKEVA11111111111111111111111111111111111");

#[program]
pub mod escrow {
    use super::*;

    pub fn create_position(
        _ctx: Context<CreatePosition>,
        market: String,
        collateral: u64,
    ) -> Result<()> {
        msg!(
            "Position opened on {} with {} collateral",
            market,
            collateral
        );
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreatePosition<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
